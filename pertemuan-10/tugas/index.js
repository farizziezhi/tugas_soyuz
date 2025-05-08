const kelasB = {
  mentor: {
    mentor1: {
      nama: "Ka Fudhail",
      gender: "Laki-Laki",
    },
    mentor2: {
      nama: "Ka Gading",
      gender: "Laki-Laki",
    },
    mentor3: {
      nama: "Ka Daffa",
      gender: "Laki-Laki",
    },
    mentor4: {
      nama: "Ka Alin",
      gender: "Perempuan",
    },
    mentor5: {
      nama: "Ka Amanda",
      gender: "Perempuan",
    },
    mentor6: {
      nama: "Ka Syakhty",
      gender: "Laki-Laki",
    },
    mentor7: {
      nama: "Ka Octavia",
      gender: "Perempuan",
    },
  },

  anggotaKelas: {
    anggota1: {
      nama: "Aqil",
      gender: "Laki-Laki",
    },
    anggota2: {
      nama: "Dirli",
      gender: "Laki-Laki",
    },
    anggota3: {
      nama: "Farhan",
      gender: "Laki-Laki",
    },
  },
};

for (let mntr in kelasB.mentor) {
  console.log(
    `${mntr}: ${kelasB.mentor[mntr].nama}, gender: ${kelasB.mentor[mntr].gender}`
  );
}

console.log();

for (let anggota in kelasB.anggotaKelas) {
  console.log(
    `${anggota}: ${kelasB.anggotaKelas[anggota].nama}, gender: ${kelasB.anggotaKelas[anggota].gender}`
  );
}
