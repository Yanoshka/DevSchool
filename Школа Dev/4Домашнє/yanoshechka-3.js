class Warrior {
    constructor() {
        this.level = 1;
        this.experience = 100;
        this.rank = "Pushover";
        this.achievements = [];
    }

    training(training) {
        const [description, experience, minLevel] = training;
        if (this.level >= minLevel) {
            this.experience += experience;
            this.achievements.push(description);
            return description;
        } else {
            return "Not strong enough";
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelDifference = enemyLevel - this.level;
        const rankDifference = this.getRankDifference(enemyLevel);

        if (levelDifference === 0) {
            this.experience += 10;
        } else if (levelDifference === -1) {
            this.experience += 5;
        } else if (levelDifference >= 2) {
            this.experience += 0;
        } else {
            const experienceGain = 20 * levelDifference * levelDifference;
            this.experience += experienceGain;
        }

        if (rankDifference >= 5) {
            return "You've been defeated";
        }

        return this.getBattleResult(levelDifference);
    }

    getRankDifference(enemyLevel) {
        const ranks = [
            "Pushover", "Novice", "Fighter", "Warrior",
            "Veteran", "Sage", "Elite", "Conqueror",
            "Champion", "Master", "Greatest"
        ];

        const rankIndex = ranks.indexOf(this.rank);
        const enemyRankIndex = Math.floor((enemyLevel - 1) / 10);

        return rankIndex - enemyRankIndex;
    }

    getBattleResult(levelDifference) {
        if (levelDifference >= 2) {
            return "Easy fight";
        } else if (levelDifference === 1 || levelDifference === 0) {
            return "A good fight";
        } else {
            return "An intense fight";
        }
    }

    rank() {
        const rankLevels = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        const ranks = [
            "Pushover", "Novice", "Fighter", "Warrior",
            "Veteran", "Sage", "Elite", "Conqueror",
            "Champion", "Master", "Greatest"
        ];

        for (let i = 0; i < rankLevels.length; i++) {
            if (this.level <= rankLevels[i]) {
                this.rank = ranks[i];
                return this.rank;
            }
        }
    }
}
