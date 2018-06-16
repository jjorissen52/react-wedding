#!/usr/bin/env bash
ssh skull "rm -rf deployments/* && git clone https://github.com/jjorissen52/react-wedding deployments/react_wedding"
scp wedding_api/secrets.ini skull:deployments/react_wedding/wedding_api
ssh skull "cd deployments/react_wedding && docker-compose build"