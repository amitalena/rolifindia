const ProductDetailsTable = ({
    productDetails = [],
    type = "furniture"
}) => {
    const MyTable = ({
        details = []
    }) => {
        return <>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                        {details.map((detail, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 bg-gray-100">
                                    {detail.label}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {detail.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    }

    return type === "tiles" ? <>
        {/* Tiles */}
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tiles Specifications</h3>
            <MyTable details={productDetails || []} />
        </div>
    </>: type === "sanitary" ? <>
        {/* Sanitary Ware Details (example) */}
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sanitary Ware Specifications</h3>
            <MyTable details={productDetails || []} />
        </div>
    </> : <>
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Furniture Specifications</h3>
            <MyTable details={productDetails || []} />
        </div>
    </>
}

export default ProductDetailsTable;