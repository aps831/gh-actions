# TODO

https://stackoverflow.com/questions/60589373/how-to-force-job-to-exit-in-github-actions-step/75809743#75809743

## First Order Actions

build-artifacts-upload

build-artifacts-download

build-maven

build-docker-artifact

-   build phase
-   extract phase
-   status phase

build-docker-image

-   build phase
-   extract phase
-   status phase
-   image phase

cache-maven

cache-nodejs

cache-terraform

check-for-no-ci-cd-run

check-conventional-release

create-pull-request

create-github-release

-   set-up-nodejs
-   install-conventional-changelog
-   create-release-notes
-   release-action

deploy-branch

deploy-mark

git-checkout

git-configure

git-switch-branch

git-add-tag

git-delete-tag

install-xmlstarlet

install-conventional-changelog

install-native-image-dependencies

login-github-ghcr

login-aws

login-aws-ecr

login-gcp

output-maven-junit-test-summary

output-nodejs-???-test-summary

output-tap-test-summary

publish-docker

publish-maven

publish-nodejs

release-artifact-download

release-latest-tag

set-up-docker

set-up-jdk

set-up-nodejs

set-up-terraform

set-up-graalvm

set-up-msbuild

set-up-vs-shell

update-templated-docs

update-changelog

-   set-up-nodejs
-   install-conventional-changelog
-   git-add-tag
-   create changelog
-   git-delete-tag

update-maven-pom

-   install-xmlstarlet
-   run xmlstarlet

update-nodejs-package

-   install-xmlstarlet
-   run xmlstarlet

update-terraform-docs

update-deploy-version

update-deployment-script

upload-maven-junit-test-results

upload-nodejs-???-test-results

upload-tap-test-results

## Second Order Actions

build-basic-project

-   git-checkout
-   run tests

build-maven-in-docker-artifact

-   git-checkout
-   set-up-docker
-   update-maven-pom
-   build-docker-artifact
-   output-maven-junit-test-summary
-   upload-maven-junit-test-results
-   build-artifacts-upload

build-nodejs-in-docker-zip

-   git-checkout
-   set-up-docker
-   update-nodejs-package
-   build-docker-artifact
-   output-nodejs-???-test-summary
-   upload-nodejs-???-test-results
-   build-artifacts-upload

build-maven-in-docker-image

-   git-checkout
-   set-up-docker
-   login-github-ghcr
-   update-maven-pom
-   build-docker-image
-   output-maven-junit-test-summary
-   upload-maven-junit-test-results
-   build-artifacts-upload

build-maven-on-runner-java-exe

-   git-checkout
-   set-up-jdk
-   update-maven-pom
-   build-maven
-   output-maven-junit-test-summary
-   upload-maven-junit-test-results
-   build-artifacts-upload

build-maven-on-runner-native-linux-exe

-   git-checkout
-   set-up-graalvm
-   cache-maven
-   install-native-image-deps
-   update-maven-pom
-   build-maven
-   output-maven-junit-test-summary
-   upload-maven-junit-test-results
-   build-artifacts-upload

build-maven-on-runner-native-windows-exe

-   git-checkout
-   set-up-graalvm
-   set-up-msbuild
-   set-up-vs-shell
-   cache-maven
-   install-native-image-deps
-   build-maven
-   output-maven-junit-test-summary
-   upload-maven-junit-test-results
-   build-artifacts-upload

## Update

update-basic-project

-   git-configure
-   update-templated-docs
-   update-changelog
-   create-pull-request

update-maven-project

-   git-configure
-   update-templated-docs
-   update-changelog
-   update-maven-pom
-   create-pull-request

update-maven-snapshot-project

-   git-configure
-   update-maven-pom
-   create-pull-request

update-nodejs-project

-   git-configure
-   update-templated-docs
-   update-changelog
-   update-nodejs-package
-   create-pull-request

update-terraform-project

-   git-configure
-   update-templated-docs
-   update-changelog
-   update-terraform-docs
-   create-pull-request

update-maven-terraform-app-project

-   git-configure
-   update-templated-docs
-   update-changelog
-   update-maven-pom
-   update-terraform-docs
-   update-deploy-version
-   create-pull-request

update-nodejs-terraform-app-project

-   git-configure
-   update-templated-docs
-   update-changelog
-   update-nodejs-package
-   update-terraform-docs
-   update-deploy-version
-   create-pull-request

## Github Release

github-release-basic-project

-   git-switch-branch
-   git-add-tag
-   create-github-release

github-release-maven-project

-   git-switch-branch
-   git-add-tag
-   build-artifacts-download
-   create-github-release

github-release-nodejs-project

-   git-switch-branch
-   git-add-tag
-   build-artifacts-download
-   create-github-release

github-release-terraform-project

-   git-switch-branch
-   git-add-tag
-   create-github-release

github-release-maven-terraform-app-project

-   git-switch-branch
-   git-add-tag
-   build-artifacts-download
-   create-github-release

## Transfer

transfer-image-ghcr-to-aws-ecr

-   set-up-terraform
-   cache-terraform
-   login-aws
-   login-github-ghcr
-   login-aws-ecr
-   publish-docker

transfer-release-asset-to-aws-s3

-   set-up-terraform
-   cache-terraform
-   login-aws
-   release-artifact-download
-   update-deployment-script
-   aws sync

## Terraform

terraform-setup

-   set-up-terraform
-   cache-terraform

terraform-apply-aws

-   login-aws
-   terraform-init
-   terraform-validate
-   terraform-apply

terraform-apply-gcp

-   login-gcp
-   terraform-init
-   terraform-validate
-   terraform-apply

terraform-plan

-   terraform-init
-   terraform-validate
-   terraform-plan
