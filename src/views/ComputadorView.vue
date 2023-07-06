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
  <div class="input-group mb-3">
    <input class="form-control" type="text" v-model="computador.cliente" placeholder="Cliente" />
    <input class="form-control" type="text" v-model="computador.placa_mae" placeholder="Placa mãe"/>
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
    <button id="buttonSalvar" class="btn btn-success" @click="salvar">Salvar</button>
  </div>
  <table class="table table-dark " v-for="computador in computadores" :key="computador.id">
    <thead class="">
      <th class="table-dark" scope="col">ID</th>
      <th class="table-dark" scope="col">Clientes</th>
      <th class="table-dark" scope="col">Placa mãe</th>
      <th class="table-dark" scope="col">Placa de vídeo</th>
      <th class="table-dark" scope="col">Processador</th>
      <th class="table-dark" scope="col">Memória ram</th>
      <th class="table-dark" scope="col">SSD</th>
      <th class="table-dark" scope="col">HD</th>
      <th class="table-dark" scope="col">Fonte</th>
      <th class="table-dark" scope="col">Gabinete</th>
      <th class="table-dark" scope="col">Preço</th>
      <th class="table-dark" scope="col">Imagem</th>
      <th class="table-dark" scope="col">Excluir</th>
    </thead>
    <tbody @click="editar(computador)">
      <td class="table-dark">({{ computador.id }})</td>
      <td class="table-dark">{{ computador.cliente }}</td>
      <td class="table-dark">{{ computador.placa_mae }}</td>
      <td class="table-dark">{{ computador.placa_de_video }}</td>
      <td class="table-dark">{{ computador.processador }}</td>
      <td class="table-dark">{{ computador.memoria_ram }}</td>
      <td class="table-dark">{{ computador.ssd }}</td>
      <td class="table-dark">{{ computador.hd }}</td>
      <td class="table-dark">{{ computador.fonte }}</td>
      <td class="table-dark">{{ computador.gabinete }}</td>
      <td class="table-dark">{{ computador.preco }}</td>
      <td class="table-dark">{{ computador.imagem }}</td>
      <td class="table-dark"><button class="btn btn-danger" @click="excluir(computador)"><img src="https://cdn-icons-png.flaticon.com/512/860/860829.png" alt=""></button></td>
    </tbody>
  </table>
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
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  transform: scale(1.1);

}
.divButtonSalvar {
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
