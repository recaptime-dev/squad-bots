# syntax=docker/dockerfile:1
FROM gitpod/workspace-go

ENV PNPM_HOME=/home/gitpod/.pnpm
ENV PATH=/home/gitpod/.nvm/versions/node/v${NODE_VERSION}/bin:/home/gitpod/.yarn/bin:${PNPM_HOME}:$PATH
ARG NODE_VERSION=18

RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | PROFILE=/dev/null bash \
    && bash -c ". .nvm/nvm.sh \
        && nvm install v${NODE_VERSION} \
        && nvm alias default v${NODE_VERSION} \
        && npm install -g typescript yarn pnpm node-gyp" \
    && echo ". ~/.nvm/nvm-lazy.sh"  >> /home/gitpod/.bashrc.d/50-node \
    && wget https://raw.githubusercontent.com/gitpod-io/workspace-images/2425257e63d7f4b3b1beed4e2edb43ded819e7a7/chunks/lang-node/nvm-lazy.sh -o ~/.nvm/nvm-lazy.sh
# above, we are adding the lazy nvm init to .bashrc, because one is executed on interactive shells, the other for non-interactive shells (e.g. plugin-host)

RUN wget https://prerelease.keybase.io/keybase_amd64.deb -O /tmp/keybase_amd64.deb \
   && sudo apt-get install --yes /tmp/keybase_amd64.deb

COPY --from=docker/buildx-bin /buildx /usr/libexec/docker/cli-plugins/docker-buildx