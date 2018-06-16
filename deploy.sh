#!/usr/bin/env bash
ssh skull "rm -rf deployments/* && git clone https://github.com/jjorissen52/react-wedding deployments/react_wedding"e
ssh skull "cd deployments/react_wedding && docker-compose build"