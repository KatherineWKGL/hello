import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InstitucionModule} from "./Institucion/institucion.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {InstitucionEntity} from "./Institucion/institucion.entity";

@Module({
  imports: [
   /*crear la conexion */
    InstitucionModule,
      TypeOrmModule.forRoot(
        {
          name: 'default', // Nombre cadena de Conex.
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'bd_formulario',
          dropSchema: false,
          entities: [
           /*definir todas las tablas que se va a utilizar*/
            InstitucionEntity,
          ],
          synchronize: true, // Crear -> true , Conectar -> false
        },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
