import axios from "axios";
import { BaseUrl } from "@/utils/constants";

const heroesServices = {
  getHeroes() {
    return new Promise(resolve => {
      axios.get(BaseUrl.heroes).then(response => resolve(response.data));
    });
  },
  getHero(id) {
    return new Promise(resolve => {
      axios
        .get(`${BaseUrl.heroes}${id}`)
        .then(response => resolve(response.data));
    });
  },
  addHero(heroData) {
    return new Promise(resolve => {
      axios.post(BaseUrl.heroes, heroData).then(response => {
        resolve(response.data);
      });
    });
  },
  updateHero(hero) {
    return new Promise(resolve => {
      axios.put(`${BaseUrl.heroes}${hero.id}`, hero).then(response => {
        resolve(response.data);
      });
    });
  },
  removeHero(hero) {
    return new Promise(resolve => {
      axios.delete(`${BaseUrl.heroes}${hero.id}`).then(response => {
        resolve(response.data);
      });
    });
  }
};

export default heroesServices;
