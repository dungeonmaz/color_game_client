class BaseSettings {
    constructor(count) {
        this.count = count
    }
}

export const createSettings = (count) => {
    const settings = new BaseSettings(count)
    return settings
}