#!/bin/bash -e

docker-compose build main && docker-compose --project-name $BUILDKITE_JOB_ID run main $@
