<script lang="ts">
import { taking_data } from '@/stores/Data Cleaning';
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      item_data: {
        urlToImage: '',
        title: '',
        publishedAt: '',
        content: '',
      },
    };
  },
  async created() {
    try {
      const data = await taking_data();
      const itemID = Number(this.$route.params.id)
      this.item_data = data[itemID];
      this.formattedDate()
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  },
  methods: {
    formattedDate() {
      const date = new Date(this.item_data.publishedAt);
      const date_array = date.toISOString().split('T')[0].split('-')
      this.item_data.publishedAt = `${date_array[2]}.${date_array[1]}.${date_array[0]}`
    }
  }
})
</script>

<template>
  <div v-if="item_data.title == ''" class="w-full h-[100vh] flex justify-center items-center">
    <img class="w-[50%] md:w-[30%] animate-pulse" src="../assets/images/Main Logo.jpg" alt="">
  </div>
  <div v-else class="pb-[120px]  flex flex-col gap-10">
    <div class="h-[30vh] md:h-[50vh] overflow-hidden">
      <img :src="item_data.urlToImage" class=" w-full" alt="">
    </div>
    <div class="px-[10%] text-justify font-serif flex flex-col gap-8">
      <h1 class="text-3xl">{{ item_data.title }}</h1>
      <p class=" text-lg">{{ item_data.publishedAt }}</p>
      <p>{{ item_data.content }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eum vel voluptas
        adipisci dolorem, mollitia quasi placeat cum provident saepe itaque quos vitae distinctio! Dolorem asperiores,
        soluta expedita nam unde necessitatibus ex quae perspiciatis architecto dolor minus nulla sit odio excepturi
        labore! Eum totam, veritatis placeat perferendis ipsam suscipit qui numquam natus quas amet non, dolorum quisquam
        rem quis officia modi fugit doloribus! Nihil fuga officiis consectetur numquam, nostrum non rem voluptas,
        distinctio quod minima earum sapiente. Rerum dicta blanditiis aliquam, voluptas quos recusandae libero beatae
      impedit nobis, quis eos voluptatibus. Ipsum aspernatur cumque vero, tempora error, molestiae laborum obcaecati
      eaque non deleniti voluptate quam dolorum ipsam? Saepe temporibus animi, accusantium adipisci, minus assumenda,
      quibusdam vel explicabo tenetur neque magni quis. Eos quo asperiores quibusdam, accusantium illo ut rerum vel,
      vitae culpa id porro ipsam sint impedit excepturi necessitatibus. Totam eius ullam id illo! Quisquam fuga nemo
      aperiam dolor explicabo beatae temporibus tempora molestiae, non nam. Perspiciatis eos autem quaerat. Magni
      veritatis omnis maxime, deserunt quae ea recusandae autem excepturi officiis est, provident reiciendis obcaecati
      assumenda error ipsam animi adipisci velit sequi. Ex voluptates dolorem accusantium mollitia nisi vero doloribus
      omnis delectus ullam distinctio illo, dolorum beatae saepe ducimus, aperiam laudantium sunt nulla atque. Hic, aut.
      Doloremque dolorum laborum rem ut fugit perspiciatis adipisci illum harum voluptatem, sapiente veritatis
      voluptatibus laboriosam, sed perferendis totam quas quaerat reprehenderit porro! Veritatis adipisci natus
      accusantium tempora illo distinctio sapiente, dicta voluptatum, labore vitae impedit libero nihil doloribus
      dolorem. Dicta iure at sunt. Aut magnam qui quaerat numquam vitae exercitationem cum ex aliquam officia,
      consequatur dolores iste dignissimos ullam delectus eligendi facere repudiandae, voluptatem asperiores
      consequuntur doloribus dolore excepturi. Asperiores explicabo et corporis vero distinctio sed laudantium pariatur
      quos deserunt. Ex ipsam alias necessitatibus laborum rerum ipsa aspernatur, autem debitis, possimus ullam
      consequuntur culpa at molestias aperiam. Vero quibusdam tenetur atque libero. Optio pariatur ex iste numquam sed
      ipsa praesentium illo atque ut magnam? Reiciendis neque maiores labore hic temporibus praesentium quibusdam quod,
      inventore sed placeat blanditiis corrupti eligendi, soluta a eveniet necessitatibus itaque maxime laboriosam
      dolore ea doloribus possimus facere? Tempore beatae error explicabo corrupti quisquam natus sapiente quibusdam
      commodi suscipit, vitae accusantium saepe cum neque velit dolorum obcaecati aliquam? Inventore blanditiis autem
      quia quam necessitatibus! Vitae animi voluptatum aliquam itaque, blanditiis corrupti repellendus perferendis
      mollitia explicabo repudiandae cum placeat quae dicta eos quia deserunt soluta, ipsum odio quis obcaecati dolores.
      Natus qui rerum nam animi maiores quia laborum aliquid inventore ea, deleniti vero. Esse, doloremque autem
      corrupti fuga veritatis quaerat ipsa, id blanditiis officia ratione a eveniet, cupiditate totam provident nihil
      ipsum corporis odit voluptates. Autem optio architecto quae accusantium ducimus saepe inventore deleniti nulla
      vitae distinctio quia vero eligendi ut adipisci ab, nesciunt quibusdam necessitatibus sint rerum soluta dolorum.
      Ipsam, excepturi exercitationem consectetur nemo corporis consequuntur numquam libero maxime placeat deleniti
      voluptate suscipit eum optio quaerat sapiente ad ipsum expedita eos? Delectus libero accusamus consectetur animi
      repellat hic reiciendis sed, laboriosam necessitatibus minima assumenda, dicta similique aliquam cumque earum
      sapiente nisi?
    </p>
  </div>
</div></template>