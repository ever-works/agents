# App stores

Mobile and desktop app stores. Developer accounts, review queues, store search optimisation.

Generated from `../data/launch-platforms.csv`. Edit the CSV, not this file.

| Platform | Automation | Cost | Traffic | Difficulty | When | Status |
|----------|------------|------|---------|------------|------|--------|
| [Apple App Store and Mac App Store](https://apps.apple.com) | assisted | fee | very-high | medium | launch-day | up |
| [Google Play](https://play.google.com/store/apps) | assisted | fee | very-high | medium | launch-day | up |
| [Microsoft Store](https://apps.microsoft.com) | assisted | free | high | medium | launch-week | up |
| [Flathub](https://flathub.org) | auto | free | high | medium | launch-week | up |
| [Snap Store](https://snapcraft.io/store) | auto | free | high | medium | launch-week | up |
| [F-Droid](https://f-droid.org) | auto | free | medium | hard | when-eligible | up |

## Platforms

### Apple App Store and Mac App Store

- id: `apple-app-store`
- site: https://apps.apple.com | submit: https://developer.apple.com/programs/
- method: developer-program | automation: assisted | cost: fee | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: medium | when: launch-day
- best for: mobile, desktop
- needs: Apple Developer Program (annual fee); app review
- how: Store search optimisation decides installs: title, subtitle, keywords, screenshots and early ratings. Submit builds days ahead of launch for review.
- status: up (checked 2026-11-22)

### Google Play

- id: `google-play`
- site: https://play.google.com/store/apps | submit: https://play.google.com/console
- method: developer-program | automation: assisted | cost: fee | link: dofollow (reported), verify on the live listing | traffic: very-high | difficulty: medium | when: launch-day
- best for: mobile
- needs: Play Console account (one-time fee); closed testing rules for new personal accounts
- how: Largest Android store. New personal developer accounts must run a closed test with real testers before production; plan that time.
- status: up (checked 2026-11-22)

### Microsoft Store

- id: `microsoft-store`
- site: https://apps.microsoft.com | submit: https://partner.microsoft.com/dashboard
- method: developer-program | automation: assisted | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: desktop
- needs: Partner Center developer account; packaged app (MSIX or installer)
- how: Windows users install from the Store. Win32 installers can be listed too; check the current account fee at sign-up.
- status: up (checked 2026-11-22)

### Flathub

- id: `flathub`
- site: https://flathub.org | submit: https://github.com/flathub/flathub
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: desktop, oss
- needs: Flatpak manifest; submission pull request
- how: Main Linux app store. Submit the Flatpak manifest by pull request; maintain it with each release.
- status: up (checked 2026-11-22)

### Snap Store

- id: `snapcraft`
- site: https://snapcraft.io/store
- method: registry-publish | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: high | difficulty: medium | when: launch-week
- best for: desktop, dev-tools
- needs: Snapcraft account; snap package built in CI
- how: Ubuntu-centred Linux store; publish from CI.
- status: up (checked 2026-11-22)

### F-Droid

- id: `f-droid`
- site: https://f-droid.org | submit: https://gitlab.com/fdroid/fdroiddata
- method: github-pr | automation: auto | cost: free | link: unknown, verify on the live listing | traffic: medium | difficulty: hard | when: when-eligible
- best for: mobile, oss
- needs: Fully open-source Android app; reproducible build; merge request to the data repository
- how: Catalog for open-source Android apps. Strict free-software rules, so only apps without proprietary dependencies qualify.
- status: up (checked 2026-11-22)
