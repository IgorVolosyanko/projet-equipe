<template>
  <Navbar />
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import api from "../../api";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      vin: null,
      erreurs: {},
    };
  },
  methods: {
    // recupérer les informations de la bouteille a ajouter
    async recupererBouteille() {
      try {
        const response = await api.get("/recupererBouteille");
        this.bouteille = response.data;
      } catch (erreur) {
        this.erreur = "Une erreur est survenue";
      }
    },
  },
  // récupérer les informations de la bouteille dès que le composant est monté
  mounted() {
    this.recupererBouteille();
  },
};
</script>
