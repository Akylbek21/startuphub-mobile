param(
    [switch]$Android,
    [switch]$iOS,
    [switch]$Web
)

# PowerShell script to start Expo from the correct project directory
# Usage examples:
# powershell -ExecutionPolicy Bypass -File .\start-expo.ps1
# powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -Android
# powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -iOS
# powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -Web
# (только ОДИН параметр платформы одновременно)

# Path to the Expo project (adjust if you rename the folder)
$projectPath = Join-Path $PSScriptRoot 'app-bootstrap'

# Check and fix ANDROID_HOME if needed (for Android platform)
if ($Android) {
    $correctAndroidPath = "$env:LOCALAPPDATA\Android\Sdk"
    if ((Test-Path $correctAndroidPath) -and ($env:ANDROID_HOME -ne $correctAndroidPath)) {
        Write-Host "Fixing ANDROID_HOME..." -ForegroundColor Yellow
        $env:ANDROID_HOME = $correctAndroidPath
        $env:Path = "$correctAndroidPath\platform-tools;$correctAndroidPath\tools;$env:Path"
        Write-Host "ANDROID_HOME set to: $correctAndroidPath" -ForegroundColor Green
    } elseif (-Not (Test-Path $correctAndroidPath)) {
        Write-Host "WARNING: Android SDK not found at $correctAndroidPath" -ForegroundColor Yellow
        Write-Host "Android launch may fail. Install Android Studio or run fix-android-sdk.ps1" -ForegroundColor Yellow
    }
}

Write-Host "[StartupHub] Checking project path: $projectPath" -ForegroundColor Cyan

if (-Not (Test-Path $projectPath)) {
    Write-Host "ERROR: Project path not found: $projectPath" -ForegroundColor Red
    exit 1
}

Push-Location $projectPath

# Optional: clear .expo cache folder
if (Test-Path '.expo') {
    Write-Host "Removing .expo cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force '.expo'
}

# Install dependencies if node_modules missing
if (-Not (Test-Path 'node_modules')) {
    Write-Host "node_modules missing. Running npm install..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) { Write-Host "npm install failed" -ForegroundColor Red; Pop-Location; exit 1 }
}

Write-Host "Starting Expo with cache clear..." -ForegroundColor Green

# Определяем платформенный флаг
$platformArg = ''
if ($Android) { $platformArg = '--android' }
elseif ($iOS) { $platformArg = '--ios' }
elseif ($Web) { $platformArg = '--web' }

if ($platformArg -ne '') {
    Write-Host "Platform auto-launch: $platformArg" -ForegroundColor Cyan
    npx expo start --clear $platformArg
} else {
    npx expo start --clear
}

Pop-Location
