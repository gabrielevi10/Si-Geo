# A simple Dockerfile for a RoR application

FROM ruby:2.4.1

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /sigeo

WORKDIR /sigeo

ADD Gemfile /sigeo/Gemfile
ADD Gemfile.lock /sigeo/Gemfile.lock

RUN bundle install
ADD . /sigeo