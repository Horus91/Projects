// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// pAequor Factory function
const pAequorFactory = (num, strand) => {
  return {
    specimenNum: num,
    dna: strand,
    mutate() {
      let randBase = Math.floor(Math.random() * 15);
      let target = this.dna[randBase];
      let base = ["A", "T", "C", "G"].filter((x) => x !== target);
      this.dna.splice(randBase, 1, base[Math.floor(Math.random() * 3)]);
    },
    compareDna(pAequor) {
      let resemblance = 1;
      for (let i = 0; i < 15; i++) {
        if (pAequor.dna[i] === this.dna[i]) {
          resemblance++;
        }
      }
      let resemblencePercent = (resemblance * 100) / 15;
      console.log(
        `specimen #${pAequor.specimenNum} and specimen #${
          this.specimenNum
        } have ${Math.floor(resemblencePercent)}% DNA in common.`
      );
    },
    //BLUNDER!!!!!!!
    willLikelySurvive() {
      let occurence = 0;
      //check below for built in iterator array FILTER you dumb
      for (const CorG of this.dna) {
        if (CorG === "C" || CorG === "G") {
          occurence++;
        }
      }
      let occurencePercent = Math.floor((occurence * 100) / this.dna.length);
      // console.log(occurencePercent);
      if (occurencePercent >= 60) {
        return true;
      } else {
        return false;
      }
    },
    // //smarter Way of willLikelySurvive
    // willLikelySurvive() {
    //   const cAndG = this.dna.filter(
    //     (letter) => letter === "C" || letter === "G"
    //   );
    //   if (cAndG.length / this.dna.length > 0.6) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
  };
};

let arrayOfSpecimens = [];
let i = 1;
while (arrayOfSpecimens.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    arrayOfSpecimens.push(temp);
    i += 1;
  }
}
console.log(arrayOfSpecimens);
