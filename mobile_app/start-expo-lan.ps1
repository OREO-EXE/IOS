$ip = (Get-NetIPAddress -InterfaceAlias "Wi-Fi" -AddressFamily IPv4 -ErrorAction SilentlyContinue).IPAddress
if ($ip) {
    Write-Host "Detected Wi-Fi IP: $ip"
    $env:REACT_NATIVE_PACKAGER_HOSTNAME = $ip
} else {
    Write-Host "Could not detect Wi-Fi IP, falling back to default."
}
npx expo start -c --lan $args
