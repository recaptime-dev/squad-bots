# Squad Bots

The monorepo for @RecapTimeBot and related bots, our helpful bot slash service account for things like issues and merge requests moderation, repository mirroring and API-related stuff.

[![Open in Gitpod](https://img.shields.io/badge/Open%20in-Gitpod-orange?style=for-the-badge&logo=gitpod)](https://gitpod.io/#https://github.com/RecapTime/squad-bots)

## Developing with real credentials

**For squad members**: Make sure you have your own `DOPPLER_TOKEN` provisioned if you're using secrets from our Doppler project via the Doppler CLI.

### Keybase bots

It is recommended to use a custom home directory (with the `--home` flag[^1] before any commands) to ensure your Keybase session survives between workspace restarts.

```bash
## Stage 1: Authenticate against the deamon
# In Gitpod, /workspace/.keybase-userdata should be autocreated at workspace init for you.
# Confirm that Keybase service (and optionally KBFS is running) before doing this.
keybase --home /workspace/.keybase-userdata login
# Another option here is make a oneshot session
KEYBASE_USERNAME=yourbothere KEYBASE_PAPERKEY="paper key here" keybase oneshot
```

[^1]: https://gist.github.com/solvaholic/4cd483b14179e3f5c652c358aaa9bf0a
