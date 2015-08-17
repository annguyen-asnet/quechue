# APT Linux Preperation (Ubuntu)
echo "Update Ubuntu"
sudo apt-get update -y
sudo apt-get -y install curl build-essential openssl libssl-dev git 

#Ruby
echo "Install Ruby"
if [[ "$(ruby --version)" ]]; then
	echo "Docpad is installed"
fi
	sudo apt-get -y install ruby 1.9.3
	cd /etc/alternatives
	sudo ln -sf /usr/bin/ruby1.9.3 ruby
	cd

#Node Version Manager
echo "Install Node Version Manager"
if [[ "$(nvm --version)" ]]; then
	echo "Node Version Manager is installed"
fi
	git clone git://github.com/creationix/nvm.git ~/.nvm
	printf "\n\n# NVM\nif [ -s ~/.nvm/nvm.sh ]; then\n\tNVM_DIR=~/.nvm\n\tsource ~/.nvm/nvm.sh\nfi" >> ~/.bashrc
	NVM_DIR=~/.nvm
	source ~/.nvm/nvm.sh

# Install Node.js
echo "Install Node.js"
if [[ "$(node --version)" ]]; then
	echo "Nodejs is installed"
fi
	nvm install v0.12.0
	nvm alias default 0.12
	nvm use 0.12

#Docpad 
echo "Install npm to global"
if [[ "$(docpad --version)" ]]; then
	echo "Docpad is installed"
fi
	sudo npm install -g npm

# Install bower
echo "Installing Grunt CLI and Bower"
sudo npm install bower grunt-cli -g

# Install gulp
if [[ "$(gulp --version)" ]]; then
	echo "Gulp is installed"
fi
	sudo npm install --global gulp
	
# Compass
echo "Installing compass"
if [[ "$(compass --version)" ]]; then
	echo "Compass is installed"
fi
	sudo gem install compass