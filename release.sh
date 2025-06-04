# usage: bash release.sh 0.1.2
git checkout master
git pull

git tag $1
echo "push tag $1..."
git push origin $1

git push

echo "done."

