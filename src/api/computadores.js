import axios from 'axios';
export default class ComputadoresApi {
  async buscarTodosOsComputadores() {
    const { data } = await axios.get('http://127.0.0.1:8000/computadores');
    return data;
  }
  async adicionarComputador(computador) {
    const { data } = await axios.post('http://127.0.0.1:8000/computadores/', computador);
    return data;
  }
  async atualizarComputador(computador) {
    const { data } = await axios.put(`http://127.0.0.1:8000/computadores/${computador.id}/`, computador);
    return data;
  }
  async excluirComputador(id) {
    const { data } = await axios.delete(`http://127.0.0.1:8000/computadores/${id}/`);
    return data;
  }
}
