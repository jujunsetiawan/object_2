const jualMobil = {
    iklan: function() {
        document.write('Bu, saya ' + this.nama + ' jual mobil ' + this.merek + ' tahun ' + this.tahun + ', bekas');
    }
};
const mobil = Object.create(jualMobil);
mobil.nama = 'Tompel'
mobil.merek = 'Avanza'
mobil.tahun = 2017
mobil.iklan(); 