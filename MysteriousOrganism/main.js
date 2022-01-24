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
// pAqeuor Factory function
const pAqeuorFactory = (num, strand) => {
  return {
    specimenNum: num,
    dna: strand,
    mutate() {
      let randBase = Math.floor(Math.random() * 15);
      let target = this.dna[randBase];
      let base = ["A", "T", "C", "G"].filter((x) => x !== target);
      this.dna.splice(randBase, 1, base[Math.floor(Math.random() * 3)]);
    },
    compareDna(pAqeuor) {
      let resemblance = 1;
      console.log(pAqeuor.dna);
      console.log(this.dna);
      for (let i = 0; i < 15; i++) {
        if (pAqeuor.dna[i] === this.dna[i]) {
          resemblance++;
        }
      }
      let resemblencePercent = (resemblance * 100) / 15;
      console.log(
        `specimen #${pAqeuor.specimenNum} and specimen #${
          this.specimenNum
        } have ${Math.floor(resemblencePercent)}% DNA in common.`
      );
    },
    willLikelySurvive() {
      let occurence = 0;
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
  };
};

// const chla = pAqeuorFactory(1, mockUpStrand());
// const law = pAqeuorFactory(2, mockUpStrand());
// chla.mutate();
// law.compareDna(chla);
// console.log(chla.dna);
// chla.willLikelySurvive();
// console.log(chla.willLikelySurvive());
let arrayOfSpecimens = [];

const creatingSurvivingSpecimen = (array) => {
  for (let i = 0; i < 100; i++) {
    let specimen = pAqeuorFactory(i, mockUpStrand());
    if (specimen.willLikelySurvive() === true) {
      return array.push(specimen);
    }
  }
};
let i = 1;
while (arrayOfSpecimens.length < 30) {
  creatingSurvivingSpecimen(arrayOfSpecimens);
  // arrayOfSpecimens[i].specimenNum += i * 100;
  i++;
}

console.log(arrayOfSpecimens);
