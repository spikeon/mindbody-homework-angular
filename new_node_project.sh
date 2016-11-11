#!/bin/bash

if [ "$EUID" -ne 0 ]
  then echo "Please run as root or sudo"
  exit
fi

repos="./.repos"

echo "Adding a node GIT repo"

echo -n "Enter repo name and press [ENTER]: "
read name
echo

grep -i "$name" "$repos"

if  [ $? == 0 ]; then
  echo "Repo already registered, quitting."
  exit 1
else

	echo "$name" >> "$repos"

	repodir="/var/repo/$name.git"
	projectdir="/var/www/node/projects/$name"

	mkdir "$repodir"
	mkdir "$projectdir"

	cd "$repodir" || exit

	git init --bare

	echo "#!/bin/bash" >> hooks/post-receive
	echo "git --work-tree=$projectdir --git-dir=$repodir checkout -f" >> hooks/post-receive
	echo "cd $projectdir" >> hooks/post-receive
	echo "npm install" >> hooks/post-receive
	echp "forever-service install $name" >> hooks/post-receive
	echo "service $name restart" >> hooks/post-receive

	chmod +x hooks/post-receive

	echo "Repo Url: ssh://root@flynndev.us$repodir"

fi
