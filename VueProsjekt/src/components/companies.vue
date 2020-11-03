<template>

<div style="width: 600px">
    <AddCompany v-on:add-company="addCompanies" />
    <!-- <AddCompany v-on:add-company="addCompanies" /> -->
    <vue-table-dynamic v-bind:key="company" :params="params" ref="table"></vue-table-dynamic>
</div>

</template>

<script>
import VueTableDynamic from 'vue-table-dynamic'
import AddCompany from "./addCompanies"
import axios from 'axios';

export default {
    name: "Companies",
    components: {
        VueTableDynamic,
        AddCompany
    },
    props: ["companies", "company"],
    methods: {
        addCompanies(newCompany) {
            const {
                id,
                title
            } = newCompany;

            axios.post(newCompany, {
                id,
                title
            })
            .then(res => this.company = [...this.company, res.data])
            .catch(err => console.log(err))
            this.companies.data.params.data = [...this.companies.data.params.data, newCompany];
        }
    },
    data() {
        return {
            params: {
                data: [
                    [1, 'Navn', 'Sist Oppdatert', 'Bransje'],
                    [1, `Komplett`, '4', 'Electro'],
                    [2, 'Mat Butikk', '10', 'Grocery Store'],
                    [3, '', '', ''],
                    [4, '', '', ''],
                    [5, '', '', '']
                ],
                header: 'row',
                border: true,
                stripe: true,
                enableSearch: true,
                sort: [0,2,3],
                pagination: true,
                pageSize: 10

            }
        }
    }
}
</script>

<style scoped>
table,
th,
td {
    border: 1px solid black;
    padding: 5px;
}

div {
    display: inline-block;
}
</style>
