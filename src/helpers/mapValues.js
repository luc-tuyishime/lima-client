export const mapValues = (prop) => {
            return {
                key: prop.id,
                text: prop.name,
                value: prop.id
            }
        }

export const mapValuesEdit = (prop) => {
            return {
                key: prop && prop.id,
                text: prop && prop.name,
                value: prop && prop.id
            }
        }
