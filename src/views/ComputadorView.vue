<script>
import ComputadoresApi from "@/api/computadores";
const computadoresApi = new ComputadoresApi();
export default{
  data() {
    return {
      computadores: [],
      computador: {},
    };
  },
  async created() {
    this.computadores = await computadoresApi.buscarTodosOsComputadores();
  },
  methods: {
    async salvar() {
      if (this.computador.id) {
        await computadoresApi.atualizarComputador(this.computador);
      } else {
        await computadoresApi.adicionarComputador(this.computador);
      }
      this.computador = {};
      this.computadores = await computadoresApi.buscarTodosOsComputadores();
    },
    editar(computador) {
      Object.assign(this.computador, computador);
    },
    async excluir(computador) {
      await computadoresApi.excluirComputador(computador.id);
      this.computadores = await computadoresApi.buscarTodosOsComputadores();
    },
  },
};
</script>

<template>
  <h1>computador</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="computador.cliente" placeholder="Cliente" />
    <input type="text" v-model="computador.placa_mae" placeholder="Placa mãe" />
    <input type="text" v-model="computador.placa_de_video" placeholder="Placa de vídeo" />
    <input type="text" v-model="computador.processador" placeholder="Processador" />
    <input type="text" v-model="computador.memoria_ram" placeholder="Memória Ram" />
    <input type="text" v-model="computador.hd" placeholder="HD" />
    <input type="text" v-model="computador.ssd" placeholder="SSD" />
    <input type="text" v-model="computador.fonte" placeholder="Fonte" />
    <input type="number" v-model="computador.preco" placeholder="Preço" />
    <input type="text" v-model="computador.imagem" placeholder="Imagem do PC" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="computador in computadores" :key="computador.id">
      <span @click="editar(computador)">
        ({{ computador.id }}) - {{ computador.cliente }} - {{ computador.placa_mae }} - {{ computador.placa_de_video }} - {{ computador.processador }} - {{ computador.memoria_ram }} - {{ computador.hd }}
        - {{ computador.ssd }} - {{ computador.fonte }} - {{ computador.preco }} - {{ computador.imagem }} -
      </span>
      <button @click="excluir(computador)">X</button>
    </li>
  </ul>
</template>

<style></style>
