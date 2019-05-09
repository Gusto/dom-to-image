FROM node:10.15.1

RUN groupadd -r buildkite-agent && useradd -u 9999 -r -g buildkite-agent -d /home/gusto buildkite-agent

WORKDIR /home/gusto
RUN chown -R buildkite-agent /home/gusto
USER buildkite-agent

ADD . /home/gusto
