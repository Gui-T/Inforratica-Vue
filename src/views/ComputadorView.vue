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
  <h1>Computadores</h1>
  <hr />
  <div class="input-group mb-3">
    <input class="form-control" type="text" v-model="computador.cliente" placeholder="Cliente" />
    <input class="form-control" type="text" v-model="computador.placa_mae" placeholder="Placa mãe" />
    <input class="form-control" type="text" v-model="computador.placa_de_video" placeholder="Placa de vídeo" />
    <input class="form-control" type="text" v-model="computador.processador" placeholder="Processador" />
    <input class="form-control" type="text" v-model="computador.memoria_ram" placeholder="Memória Ram" />
    <input class="form-control" type="text" v-model="computador.hd" placeholder="HD" />
    <input class="form-control" type="text" v-model="computador.ssd" placeholder="SSD" />
    <input class="form-control" type="text" v-model="computador.fonte" placeholder="Fonte" />
    <input class="form-control" type="text" v-model="computador.gabinete" placeholder="Gabinete">
    <input class="form-control" type="number" v-model="computador.preco" placeholder="Preço" />
    <input class="form-control" type="text" v-model="computador.imagem" placeholder="Imagem do PC" />
  </div>
  <div class="divButtonSalvar">
    <button id="buttonSalvar" class="btn btn-light" @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul class="list-group">
    <li class="list-group-item" v-for="computador in computadores" :key="computador.id">
      <span @click="editar(computador)">
        ({{ computador.id }}) - {{ computador.cliente }} - {{ computador.placa_mae }} - {{ computador.placa_de_video }} - {{ computador.processador }} - {{ computador.memoria_ram }} - {{ computador.hd }}
        - {{ computador.ssd }} - {{ computador.fonte }} - {{ computador.gabinete }} - {{ computador.preco }} - {{ computador.imagem }} -
      </span>
      <button class="btn btn-light" @click="excluir(computador.id)"><img src="https://cdn-icons-png.flaticon.com/512/860/860829.png" alt=""></button>
    </li>
  </ul>
</template>

<style>
h1 {
  text-align: center;
}
button img {
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
}
input {
  margin: 3px;
  width: 100px;
  height: 40px;
  
}
#buttonSalvar {
  margin: 3px;
  width: 100px;
  height: 40px;
}
.divButtonSalvar {
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
