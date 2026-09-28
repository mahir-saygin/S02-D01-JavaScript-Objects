function carSimulator(marka, model, kilometre, fiyat) {
  const araba = {
    marka: marka,
    model: model,
    kilometre: kilometre,
    fiyat: fiyat,
    depo: 50,
    getPrice: function () {
      return 'Arabanın güncel piyasa değeri ' + this.fiyat + " TL'dir.";
    },
    refuel: function (miktar) {
      if (this.depo > 0) {
        this.depo = this.depo + miktar;
        if (this.depo > 100) {
          this.depo = 100;
        }
      }
      return 'Depo %' + this.depo + ' doludur.';
    },

    drive: function (yol) {
      if (yol > 0) {
        this.kilometre = this.kilometre + yol;
        this.depo = this.depo - (yol * 5) / 100;
        this.fiyat = this.fiyat - (yol * 50) / 100;
      }
      return "Araba'nın güncel kilometresi:" + this.kilometre;
    },
  };
  return araba;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = carSimulator;
