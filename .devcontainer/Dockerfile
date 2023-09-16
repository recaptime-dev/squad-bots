# syntax=docker/dockerfile:1
FROM gitpod/workspace-go

LABEL org.opencontainers.image.source=https://github.com/recaptime-dev/squad-bots

############################################################
# Extracted from chunks:lang-node
############################################################
ENV PNPM_HOME=/home/gitpod/.pnpm
ENV PATH=/home/gitpod/.nvm/versions/node/v${NODE_VERSION}/bin:/home/gitpod/.yarn/bin:${PNPM_HOME}:$PATH
ARG NODE_VERSION=18

RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | PROFILE=/dev/null bash \
    && bash -c ". .nvm/nvm.sh \
        && nvm install v${NODE_VERSION} \
        && nvm alias default v${NODE_VERSION} \
        && npm install -g typescript yarn pnpm node-gyp" \
    && echo ". ~/.nvm/nvm-lazy.sh"  >> /home/gitpod/.bashrc.d/50-node \
    && curl -fsSL https://raw.githubusercontent.com/gitpod-io/workspace-images/2425257e63d7f4b3b1beed4e2edb43ded819e7a7/chunks/lang-node/nvm-lazy.sh -o ~/.nvm/nvm-lazy.sh
# above, we are adding the lazy nvm init to .bashrc, because one is executed on interactive shells, the other for non-interactive shells (e.g. plugin-host)

############################################################
# Extracted from chunks:tool-brew
############################################################
RUN mkdir ~/.cache -p && /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
ENV PATH=/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin/:$PATH
ENV MANPATH="$MANPATH:/home/linuxbrew/.linuxbrew/share/man"
ENV INFOPATH="$INFOPATH:/home/linuxbrew/.linuxbrew/share/info"
ENV HOMEBREW_NO_AUTO_UPDATE=1
RUN brew install cmake

############################################################
# The rest is installing Keybase itself and then some tools behind the scenes.
############################################################
RUN wget https://prerelease.keybase.io/keybase_amd64.deb -O /tmp/keybase_amd64.deb \
   && sudo install-packages /tmp/keybase_amd64.deb
COPY --from=docker/buildx-bin /buildx /usr/libexec/docker/cli-plugins/docker-buildx
RUN brew install gh glab hadolint shellcheck dopplerhq/cli/doppler
