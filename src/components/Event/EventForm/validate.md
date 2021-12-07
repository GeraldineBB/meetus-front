 <Input id="file"
                             name="file" 
                             accept="image/*"
                              id="contained-button-file"
                               multiple type="file"
                               value={formik.values.file}
                            onChange={formik.handleChange} />
                            <Button sx={{ backgroundColor: '#9FBFFF', '&:hover': { backgroundColor: '#82B5A5' } }} fullWidth variant="contained" component="span">
                                Téléchargez votre image de couverture d'évènement
                            </Button>
 
 

onSubmit: values => {
              alert(JSON.stringify(values, null, 2,
                 { 
                fileName: values.file.name, 
                type: values.file.type,
                size: `${values.file.size} bytes`
              }));
            },
          });




 date : 

renderInput={(props) => <TextField {...props} />}
                                label="Date & Heure"
                                value={value}
                                id="date"
                                name="date"
                                format="MM/dd/yyyy"
                                type="date"                               
                                onChange={(newValue) => {
                                     setValue(newValue); 
                                }}
                                minDateTime={new Date( ) } ///+ 86400000 1 JOUR


 onChange={(newValue) => {
                                     setValue(newValue); 
                                }}
 
 
 
 
 
 onChange={(newValue) => {
                                     setValue(newValue); 
                                }}
 
 
 
 
 
 
 
 handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },


  onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);



         /* 
    const validationSchema = yup.object({
        eventName: yup
            .string('Entré le nom de l\'évènement')
            .min(3, 'Un nom d\'évènement doit contenir 3 caractères minimum')
            .required('Le nom de l\'évènement doit être rempli'),
            place: yup
            .string('Entré un lieu valide')
            .min(3, 'Un lieu doit contenir au moins 3 lettres')
            .required('Un lieu est requis'),
            description: yup
            .string('Entré une description')
            .min(20, 'Une description doit contenir 20 caractères au minimum')
            .required('Une description est requise'),
            numberOfPeople: yup
            .number('Entré un nombre maximum de participant ')
            .min(2, 'Un évènement doit avoir un moins 2 participant')
            .required('Le nombre maximum de participant est requis'),
    }); */

   
        /* const formik = useFormik({
            initialValues: {
                eventName: '',
                place:'',
                description:'',
                numberOfPeople:'',
                picked: '',
                categorySelect: '',
                date: '',

            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                alert(JSON.stringify(values, null, 2)); 
            },
        }); */




         /*   handleSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          } */