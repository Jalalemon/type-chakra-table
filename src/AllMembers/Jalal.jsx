import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
const Jalal = () => {
    return (
        <div>
          <ChakraProvider>
          <Box p={4}>
            <Table variant="striped" size="sm">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Name</Th>
                  <Th>Applied Job</Th>
                  <Th>Interview</Th>
                  <Th>Completed task</Th>
                  <Th>Rejection </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>20-12-2022</Td>
                  <Td >Mohammad Jalal Uddin</Td>
                  <Td>8</Td>
                  <Td>0</Td>
                  <Td>1</Td>
                  <Td> 2</Td>
                </Tr>
                <Tr>
                  <Td>21-12-2022</Td>
                 <Td >Mohammad Jalal Uddin</Td>
                  <Td>9</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td> 0</Td>
                </Tr>
                <Tr>
                  <Td>22-12-2022</Td>
                  <Td >Mohammad Jalal Uddin</Td>
                  <Td>10</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td> 1</Td>
                </Tr>
                <Tr>
                  <Td>23-12-2022</Td>
                  <Td >Mohammad Jalal Uddin</Td>
                  <Td>20</Td>
                  <Td>0</Td>
                  <Td>50%</Td>
                  <Td> 4</Td>
                </Tr>
                <Tr>
                  <Td>24-12-2022</Td>
                  <Td >Mohammad Jalal Uddin</Td>
                  <Td>20</Td>
                  <Td>0</Td>
                  <Td>50%</Td>
                  <Td> 4</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </Box>
        </ChakraProvider>  
        </div>
    );
};

export default Jalal;