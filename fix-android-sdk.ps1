# Script to fix ANDROID_HOME environment variable
# Run as Administrator if you want to set it permanently

$correctPath = "C:\Users\akylbek\AppData\Local\Android\Sdk"

# Check if SDK exists
if (-Not (Test-Path $correctPath)) {
    Write-Host "ERROR: Android SDK not found at $correctPath" -ForegroundColor Red
    Write-Host "Please install Android Studio or set the correct path manually." -ForegroundColor Yellow
    exit 1
}

Write-Host "Android SDK found at: $correctPath" -ForegroundColor Green

# Set for current session
$env:ANDROID_HOME = $correctPath
$env:Path = "$correctPath\platform-tools;$correctPath\tools;$env:Path"

Write-Host "ANDROID_HOME set for current session" -ForegroundColor Green

# Optionally set permanently (requires admin)
$setPermanent = Read-Host "Set ANDROID_HOME permanently? (y/n)"
if ($setPermanent -eq 'y') {
    try {
        [System.Environment]::SetEnvironmentVariable('ANDROID_HOME', $correctPath, [System.EnvironmentVariableTarget]::User)
        Write-Host "ANDROID_HOME permanently set in User environment variables" -ForegroundColor Green
        Write-Host "You may need to restart VS Code/terminal for changes to take effect" -ForegroundColor Yellow
    } catch {
        Write-Host "Failed to set permanent variable. Try running as Administrator." -ForegroundColor Red
    }
}

# Test adb
Write-Host "`nTesting adb connection..." -ForegroundColor Cyan
& "$correctPath\platform-tools\adb.exe" version
