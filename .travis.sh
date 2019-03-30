#!/usr/bin/env bash

if [ "${1}" == "deploy" ]; then
    docker push "uumpa/knesset-data-web-ui:latest" &&\
    docker push "uumpa/knesset-data-web-ui:${TRAVIS_COMMIT}" &&\
    travis_ci_operator.sh github-yaml-update \
        hasadna-k8s master values.auto-updated.yaml '{"oknesset":{"WebUiImage": "uumpa/knesset-data-web-ui:'${TRAVIS_COMMIT}'"}}' \
        "automatic update of knesset-data-web-ui" hasadna/hasadna-k8s &&\
    echo &&\
    echo Great Success &&\
    echo &&\
    echo uumpa/knesset-data-web-ui:latest &&\
    echo uumpa/knesset-data-web-ui:${TRAVIS_COMMIT}
fi
