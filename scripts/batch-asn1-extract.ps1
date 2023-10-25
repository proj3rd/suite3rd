$path = "../specs/*"
$exts = '*.doc', '*.docx'

$filelist = get-childitem -path $path -include $exts
foreach ($file in $filelist) {
  npm run cli asn1 extract $file
}
