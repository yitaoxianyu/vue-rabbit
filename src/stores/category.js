import { defineStore } from "pinia"
import { ref } from "vue";
import { getCategoryAPI } from "@/apis/category";
export const useCategoryStore = defineStore('category',() => {
    const categoryList = ref([]);
    
    async function getCategory(){
        const res = await getCategoryAPI();
        categoryList.value = res.result;
    }

    return {
        categoryList,
        getCategory,
    }
})