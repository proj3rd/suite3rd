$filelist = get-childitem -path ../asn1/* -include *.asn1

cd ..
git clone https://github.com/proj3rd/lib3rd
cd lib3rd
npm install

foreach ($file in $filelist) {
  npm run asn1 serialize $file
}

cd ../scripts
