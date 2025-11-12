param(
    [string]$input = "logo.png",
    [string]$output = "logo-small.png",
    [int]$size = 40
)

# Resize an image to a square PNG of specified size using System.Drawing
# Usage example:
#   powershell -ExecutionPolicy Bypass -File .\resize-logo.ps1 -input logo.png -output logo-small.png -size 40

if (-not (Test-Path $input)) {
    Write-Error "Input file '$input' not found. Please put your logo image in the project folder (e.g. logo.png)."
    exit 1
}

try {
    Add-Type -AssemblyName System.Drawing
} catch {
    Write-Error "Failed to load System.Drawing. This script requires Windows PowerShell with System.Drawing available."
    exit 1
}

try {
    $img = [System.Drawing.Image]::FromFile($input)
    # Keep aspect ratio, fit into square
    $srcW = $img.Width
    $srcH = $img.Height
    if ($srcW -eq $srcH) {
        $targetW = $size
        $targetH = $size
    } else {
        # fit longest edge to size, compute other
        if ($srcW -gt $srcH) {
            $targetW = $size
            $targetH = [int]([double]$srcH / $srcW * $size)
        } else {
            $targetH = $size
            $targetW = [int]([double]$srcW / $srcH * $size)
        }
    }

    $thumb = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($thumb)
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

    # Compute centered position
    $x = [int](($size - $targetW) / 2)
    $y = [int](($size - $targetH) / 2)

    $g.DrawImage($img, $x, $y, $targetW, $targetH)

    $thumb.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $thumb.Dispose()
    $img.Dispose()

    Write-Host "Saved resized image to '$output' (size ${size}x${size})"
} catch {
    Write-Error "Error while resizing image: $_"
    exit 1
}
