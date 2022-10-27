import { createRouter, createWebHistory } from "vue-router";
import HouseHire from "@/views/HouseHire.vue";
import HouseDisplay from "@/views/HouseHire/HouseDisplay.vue";
import LikedHouse from "@/views/HouseHire/LikedHouse.vue";
import PersonalInformation from "@/views/HouseHire/PersonalInformation.vue";
import HomePage from "@/views/HomePage.vue";

import HouseHold from "@/views/HouseHold.vue";
import HouseHoldInformation from "@/views/HouseHold/HouseHoldInformation";
import HouseInformation from "@/views/HouseHold/HouseInformation";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/HouseHire",
    redirect: "/HouseHire/HouseDisplay",
    name: "HouseHire",
    component: HouseHire,
    children: [
      {
        path: "/HouseHire/HouseDisplay",
        component: HouseDisplay,
      },
      {
        path: "/HouseHire/LikedHouse",
        component: LikedHouse,
      },
      {
        path: "/HouseHire/PersonalInformation",
        component: PersonalInformation,
      },
    ],
  },
  {
    path: "/HouseHold",
    redirect: "HouseHold/HouseHoldInformation",
    name: "HouseHold",
    component: HouseHold,
    children: [
      {
        path: "/HouseHold/HouseHoldInformation",
        component: HouseHoldInformation,
      },
      {
        path: "/HouseHold/HouseInformation",
        component: HouseInformation,
      }
    ]
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log('qwq')
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      }
    }
  }
});

export default router;
