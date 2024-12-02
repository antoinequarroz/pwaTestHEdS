<template>
  <div class="questionnaire">
    <h2>Phase haute</h2>
    <div 
      v-for="(symptom, index) in phaseHaute" 
      :key="'haute-' + index" 
      class="question"
    >
      <p>{{ symptom }}</p>
      <div class="options">
        <label
          v-for="option in phaseHauteOptions"
          :key="'haute-' + index + '-' + option.value"
          class="option"
        >
          <input
            type="radio"
            :name="'phaseHaute-' + index"
            :value="option.value"
            v-model="phaseHauteResponses[index]"
          />
          <span
            class="option-box phase-haute"
            :class="{ selected: phaseHauteResponses[index] === option.value }"
            :style="{ backgroundColor: option.color }"
            :aria-label="option.label"
          >
            {{ option.label }}
          </span>
        </label>
      </div>
    </div>

    <h2>Phase basse</h2>
    <div 
      v-for="(symptom, index) in phaseBasse" 
      :key="'basse-' + index" 
      class="question"
    >
      <p>{{ symptom }}</p>
      <div class="options">
        <label
          v-for="option in phaseBasseOptions"
          :key="'basse-' + index + '-' + option.value"
          class="option"
        >
          <input
            type="radio"
            :name="'phaseBasse-' + index"
            :value="option.value"
            v-model="phaseBasseResponses[index]"
          />
          <span
            class="option-box phase-basse"
            :class="{ selected: phaseBasseResponses[index] === option.value }"
            :style="{ backgroundColor: option.color }"
            :aria-label="option.label"
          >
            {{ option.label }}
          </span>
        </label>
      </div>
    </div>

    <button @click="calculateScore">Calculers</button>
    <div v-if="result !== null" class="result">
      <p>Résultat Phase haute : {{ result.phaseHaute }}</p>
      <p>Résultat Phase basse : {{ result.phaseBasse }}</p>
      <p>Score Final : {{ result.totalScore }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phaseHaute: [
        "Insomnie",
        "Augmentation estime de soi",
        "Tachypsychie",
        "Hyperactivité",
        "Flux de parole élevé",
        "Euphorie / désinhibition",
        "Visage hyper expressif",
        "Humeur changeante rapide",
        "Idée de grandeur",
        "Grande confiance en soi",
      ],
      phaseBasse: [
        "Humeur dépressive",
        "État de stress",
        "Sentiment de vide, tristesse/mélancolie",
        "Perte d'intérêt",
        "Irritabilité",
        "Hypersomnie",
        "Lenteur",
        "Fatigue sans effort physique",
        "Dévalorisation / culpabilité",
        "Pensées négatives",
        "Anxiété",
      ],
      phaseHauteOptions: [
        { value: 3, label: "++", color: "#2563eb" },
        { value: 2, label: "+", color: "#3b82f6" },
        { value: 1, label: "-", color: "#60a5fa" },
        { value: 0, label: "--", color: "#d1d5db" },
      ],
      phaseBasseOptions: [
        { value: -3, label: "++", color: "#ef4444" },
        { value: -2, label: "+", color: "#f87171" },
        { value: -1, label: "-", color: "#fca5a5" },
        { value: 0, label: "--", color: "#d1d5db" },
      ],
      phaseHauteResponses: {},
      phaseBasseResponses: {},
      result: null,
    };
  },
  methods: {
    calculateScore() {
      const phaseHauteScore = Object.values(this.phaseHauteResponses).reduce(
        (acc, val) => acc + (parseInt(val) || 0),
        0
      );
      const phaseBasseScore = Object.values(this.phaseBasseResponses).reduce(
        (acc, val) => acc + (parseInt(val) || 0),
        0
      );

      const totalScore = phaseHauteScore + phaseBasseScore;

      this.result = {
        phaseHaute: phaseHauteScore,
        phaseBasse: phaseBasseScore,
        totalScore: totalScore,
      };
    },
  },
};
</script>

<style scoped>
.questionnaire {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #374151;
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.6em;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
}

.question {
  margin-bottom: 30px;
}

.question p {
  font-weight: 600;
  color: #111827;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.options {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  /* Empêche le retour à la ligne pour garder les 4 boutons alignés */
  flex-wrap: nowrap;
  overflow-x: auto;
}

.option {
  flex: 1 1 22%;
  text-align: center;
}

.option input {
  display: none;
}

.option-box {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: bold;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 3px solid transparent;
}

.option-box:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.option-box.selected.phase-haute {
  border-color: #ef4444; /* Bordure rouge pour Phase haute sélectionnée */
}

.option-box.selected.phase-basse {
  border-color: #2563eb; /* Bordure bleue pour Phase basse sélectionnée */
}

button {
  display: block;
  width: 100%;
  max-width: 350px;
  margin: 30px auto 20px;
  padding: 15px 0;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}

.result {
  margin-top: 20px;
  text-align: center;
  font-size: 1.2em;
  color: #111827;
  background-color: #f3f4f6;
  padding: 15px;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .questionnaire {
    padding: 15px;
  }

  h2 {
    font-size: 1.4em;
    margin-bottom: 20px;
  }

  .question p {
    font-size: 1em;
    margin-bottom: 12px;
  }

  .option-box {
    width: 45px;
    height: 45px;
    font-size: 0.9em;
  }

  .options {
    gap: 8px;
  }

  button {
    padding: 12px 0;
    font-size: 1em;
  }

  .result {
    font-size: 1.1em;
    padding: 12px;
  }
}
</style>
