interface slcType {
    header: {
        [key: string]: string
    },
    body: {
        [key: string]: string
    },
    dropdown: {
        [key: string]: {
            label: string,
            options: string[]
        }[]
    }
}

const slc: slcType = {
    header: {
        title: "ຄັງຄວາມຮູ້ ສູນ ICT",
        description: "Dev by Barlus Engineer"
    },
    body: {
        title: "ຄັງຄວາມຮູ້ ສູນ ICT ແຂວງຫຼວງນ້ຳທາ"
    },
    dropdown: {
        home_navbar: [
            {
                label: "ບັນຫາຄອມພິວເຕີ",
                options: ["ຄອມເປີດບໍ່ຕິດ", "ລົງວິນໂດ້ວໃໝ່"]
            },
            {
                label: "MicrosoftOffice",
                options: ["Word", "Excel", "PowerPoint", "Access"]
            },
            {
                label: "ບົດສອນ",
                options: ["ພາສາລາວ", "ຄະນິດສາດ", "ຟີຊິກ", "ຊີວະ"]
            },
            {
                label: "ອຶ່ນໆ",
                options: ["ພາສາລາວ", "ຄະນິດສາດ", "ຟີຊິກ", "ຊີວະ"]
            }
        ]
    }
}

export { slc }
