-- CreateTable
CREATE TABLE "loja" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR NOT NULL,

    CONSTRAINT "loja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR NOT NULL,
    "custo" VARCHAR NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtoloja" (
    "id" SERIAL NOT NULL,
    "idproduto" INTEGER NOT NULL,
    "idloja" INTEGER NOT NULL,
    "precovenda" VARCHAR NOT NULL,

    CONSTRAINT "produtoloja_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produtoloja" ADD CONSTRAINT "fk_idloja" FOREIGN KEY ("idloja") REFERENCES "loja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "produtoloja" ADD CONSTRAINT "fk_idproduto" FOREIGN KEY ("idproduto") REFERENCES "produto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
