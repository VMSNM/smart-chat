const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className="flex mt-4 gap-2">
            <div className="flex gap-1">
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''} `}>
                    <span className="label-text text-gray-400">Male</span>
                </label>
                <input type='checkbox' className='checkbox mt-1 border-gray-700'
                 checked={selectedGender === 'male'}
                 onChange={() => onCheckboxChange('male')}
                 />
            </div>
            <div className="flex gap-1">
                <label className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''} `}>
                    <span className="label-text text-gray-400">Female</span>
                </label>
                <input type="checkbox" className="checkbox mt-1 border-gray-700" 
                 checked={selectedGender === 'female'}
                 onChange={() => onCheckboxChange('female')}
                />
            </div>
        </div>
    )
}

export default GenderCheckbox;