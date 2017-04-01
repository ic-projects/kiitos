#!/bin/bash

cd Ethereum
screen -d -m testrpc -m "test" -a 50

cd ethereum-bridge
rm -rf database/tingodb
mkdir database/tingodb
screen -d -m node bridge -a 49

cd ..
truffle migrate

cd ../Kiitos
screen -d -m meteor
