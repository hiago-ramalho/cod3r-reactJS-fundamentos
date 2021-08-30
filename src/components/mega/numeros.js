function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
}

function gerarNumeros (quantidade) {
    const numeros = Array(quantidade).fill(0).reduce(nums => {
        const novoNumero = gerarNumeroNaoContido(1, 61, nums)
        return [...nums, novoNumero]
    }, []).sort((n1, n2) => n1 - n2)

    return numeros
}

console.log(gerarNumeros(7))