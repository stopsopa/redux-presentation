#!/bin/bash

set -e

function color {
   printf "\e[94m$1\e[0m\n"
}

if [ "$#" == 1 ] && [ "$1" == "force" ] ; then

    color "git push origin --force"

    color origin

    git push origin --force

    color stopsopa
    git push stopsopa --force
else

    color "git push origin"

    color origin
    git push origin

    color stopsopa
    git push stopsopa
fi

