
export const countScoreMod = (count, skips) => {
    const scoreCountMod = Math.pow(count, 0.75)
    const scoreSkipsMod = Math.log10(12 - skips)
    const scoreModifier = Math.ceil(scoreCountMod * scoreSkipsMod)
    return scoreModifier
}

class BaseSettings {
    constructor(count, skips) {
        this.count = count
        this.skips = skips
        this.scoreModifier = this.getScoreModifier()
    }

    getCount() {
        return this.count
    }

    getSkips() {
        return this.skips
    }

    getScoreModifier() {
        return countScoreMod(this.count, this.skips)
    }
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
export const clampSetting = {
    count: { min: 2, max: 9 },
    skips: { min: 0, max: 10 },
}

export const saveSettings = (values) => {
    localStorage.setItem('guessColorNameSettings', JSON.stringify(values))
}

export const createSettings = () => {
    const values = JSON.parse(localStorage.getItem('guessColorNameSettings'))
    if (!values) return 'error'
    const settingsClass = new BaseSettings(clamp(values.count, clampSetting.count.min, clampSetting.count.max),
    clamp(values.skips, clampSetting.skips.min, clampSetting.skips.max)
    )
    return settingsClass
}