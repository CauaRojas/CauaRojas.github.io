git add .;
git commit -a -m "commit de para enviar para producao";
git push;
npm run build;
Copy-Item ".\dist" "..\temp" -Recurse -Force;
git switch build;
Remove-Item '.\assets';
Copy-Item "..\temp\dist\*" "." -Recurse -Force;
git add .;
git commit -a -m "Atualizado com a ultima versao dev";
git push origin build;
