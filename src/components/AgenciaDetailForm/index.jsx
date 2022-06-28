import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import SidebarWithHeader from "../Sidebar/sidebar";

import { Link, useNavigate, useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import api from "../../services/api";
import { config } from "../../core/config";

const AgenciaDetailForm = () => {
  const { id } = useParams();

  const [dataAgency,setdataAgency] = useState({
    client_id: config.clientId,
    number: "",
    description: "",
  });


  useEffect(() => {
    if(id){
      getFare(id)

    }
  }, [])
  
 
  const navigate = useNavigate();

  const getFare = async (id)=>{
    await api
    .get(`/agency/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
    .then((data) => {
      setdataAgency(data.data)
    })
    .catch((error) => {
      alert(JSON.stringify(error));
    });
 };

  const createFare = async (fare) => {
    await api
      .post("/agency", fare, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((x) => {
        navigate("/agencias");
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  };

 

  function validateName(value) {
    let error;
    if (!value) {
      error = "Valor necessário";
    }
    return error;
  }

  return (
    <>
    <SidebarWithHeader>
      <Text mb="5%" w="90%" fontSize="25px" fontWeight="bold">
        Criar agência
      </Text>{" "}
      <Box
        fontWeight="medium"
        p="6"
        boxShadow="md"
        borderRadius="15px"
        mt="15px"
        bg="white"
        h="60%"
        w="100%"
        color="black"
      >
        <Flex>
          <Text w="90%" fontSize="25px" fontWeight="semibold">
            Controle de Agências
          </Text>
        </Flex>
        <Formik
          initialValues={dataAgency}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              createFare(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <Field name="number" validate={validateName} >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.number && form.touched.number}
                  >
                    <FormLabel htmlFor="number">Nome  ou Nº da Agencia</FormLabel>
                    <Input {...field} id="number" placeholder="Nome" />
                    <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="description" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.description && form.touched.description
                    }
                  >
                    <FormLabel htmlFor="description">
                      Descrição
                    </FormLabel>
                    <Input
                      {...field}
                      id="description"
                      placeholder="Descreva a tarifa"
                     
                      />
                    <FormErrorMessage>
                      {form.errors.description}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            
              <Button
                mt={154}
                colorScheme="blue"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Salvar
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      </SidebarWithHeader>
    </>
  );
};

export default AgenciaDetailForm;
