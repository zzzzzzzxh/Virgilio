(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{394:function(e,t,a){"use strict";a.r(t);var o=a(33),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Motivation"}},[e._v("Motivation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Frame-the-problem"}},[e._v("Frame the problem")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Collect-and-prepare-the-data"}},[e._v("Collect and prepare the data")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Select-and-train-an-ML-model"}},[e._v("Select and train an ML model")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Evaluate-and-fine-tuning"}},[e._v("Evaluate and fine tuning")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Launch-and-mantain-the-system"}},[e._v("Launch and mantain the system")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),a("p",[e._v("Let's dive right in!")]),e._v(" "),a("h3",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v("You can find hundreds of online articles describing the process of developing a Data Science project.\nIn this article Virgilio does not aim to give you the details of each phase, which will be dealt with in more technical guides,\nbut rather aims to give you an overview of the various steps, as well as a sort of checklist to keep in mind when starting a project.")]),e._v(" "),a("p",[e._v("As you may have noticed, "),a("strong",[e._v("the structure of Purgatory reflects the entire Data Science process lifecycle")]),e._v(", with each "),a("em",[e._v("section")]),e._v(" corresponding to a macro phase, and each "),a("em",[e._v("guide")]),e._v(" within it corresponding to a sub-stage of the process. This content organization is designed to provide clarity to the structure of Purgatorio, clarity to the Data Science process, and to provide an useful checklist to consult whenever you start a new project.")]),e._v(" "),a("p",[e._v("This design is inspired by the checklist in the magnificent book\n"),a("a",{attrs:{href:"https://www.amazon.it/Hands-Machine-Learning-Scikit-learn-Tensorflow/dp/1492032646",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow"),a("OutboundLink")],1),e._v(", which I would urge you to buy.")]),e._v(" "),a("p",[e._v("It's worth its weight in bits!")]),e._v(" "),a("p",[e._v('Let\'s recap what we mean by life cycle of the data science process (from here on, for brevity, we will only call it "process").')]),e._v(" "),a("p",[e._v("A Data Science project is any project that aims to extract knowledge from data\n(for example, predict the optimal interest rate for a loan, or how many customers will enter the store tomorrow),\nand in doing so, use Machine Learning techniques.")]),e._v(" "),a("p",[e._v("These techniques can be of two types:")]),e._v(" "),a("ul",[a("li",[e._v("Traditional Machine Learning techniques (statistical models like SVM, decision trees, or clustering)")]),e._v(" "),a("li",[e._v("Deep Learning Techniques (neural networks)")])]),e._v(" "),a("p",[e._v("For now don't worry about the difference between the two types, just know for now that the former have been around for decades,\nwhile the latter are the subject of active experimental research and have only started to be used in the last 6-7 years.")]),e._v(" "),a("p",[e._v("You are now ready for a short tour of the Data Science process, where I'll give you an overview of what your trip to Purgatorio will be like.")]),e._v(" "),a("h3",{attrs:{id:"frame-the-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frame-the-problem"}},[e._v("#")]),e._v(" Frame the problem")]),e._v(" "),a("p",[e._v("Each Data Science project starts from a phase called Problem Statement or Problem Shaping, i.e. the process of identifying the problem to be solved and the commercial advantages to be obtained.")]),e._v(" "),a("p",[e._v("How do you do it? We must be ready to ask the right questions.")]),e._v(" "),a("p",[e._v("Usually the first questions you ask yourself are:")]),e._v(" "),a("ul",[a("li",[e._v("What is the scope of the project?")]),e._v(" "),a("li",[e._v("What is the desired result?")]),e._v(" "),a("li",[e._v("What data do we have available?")]),e._v(" "),a("li",[e._v("Do we have evidence that they contain relevant information?")])]),e._v(" "),a("p",[e._v("During this phase, close contact between you (the technician) and the domain expert is vital.\nIf you are developing a project for a company, presumably it will be the source of domain knowledge: learn as much as you can!")]),e._v(" "),a("p",[e._v("If you are developing a project for yourself, look for domain experts to ask questions!")]),e._v(" "),a("p",[e._v('Studying and practicing you will develop a "data mindset", which will help you a lot in this phase. An entire guide is dedicated to this issue.')]),e._v(" "),a("p",[e._v("When you have framed the type of problem you want to solve, it is time to choose objective metrics to evaluate the result of the project: depending on the type of problem addressed, we will see how different metrics provide indications on the performance of the Machine Learning models that we will develop.")]),e._v(" "),a("p",[e._v("Last but not least, it is necessary to make sure that the assumptions we make are correct, the data we have collected are not corrupted or biased, and how the system will be integrated with existing systems and then used.")]),e._v(" "),a("h3",{attrs:{id:"collect-and-prepare-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collect-and-prepare-the-data"}},[e._v("#")]),e._v(" Collect and prepare the data")]),e._v(" "),a("p",[e._v("The indispensable raw material for Data Science projects is data (you never would have said so!).\nCollecting, organizing and then cleaning them is often the most "),a("em",[e._v("onerous phase")]),e._v(' of the whole process.\nYou need to understand what the data sources are, how they collected them, how the data from various sources relate to each other.\nOnce the data has been obtained, it is necessary to organize it effectively, and to keep original versions of it so that you always have at your disposal the "ground truth" of our project.')]),e._v(" "),a("p",[e._v("In fact, a large part of the work of cleaning and preparing the data consists of steps (called pre-processing) that transform them: from raw data just collected, to clean data and ready to be analyzed by a model in the next macro-phase.")]),e._v(" "),a("p",[e._v("Maintaining the various versions of the data, to which the pre-processing steps have been applied, is vital to achieve "),a("em",[e._v("reproducible results")]),e._v(" and "),a("em",[e._v("maintainable systems")]),e._v(".")]),e._v(" "),a("p",[e._v('The information represented by the data is called "features" (in the simple case of tabular data, each attribute is a feature).')]),e._v(" "),a("p",[e._v('Once the raw data has been cleaned, the feature engineering phase often takes place in which existing data is combined to "suggest" to the models the relationships between them.')]),e._v(" "),a("p",[e._v('For example, if my data contains the date of a purchase in a store, I can add the feature "day of the week", indicating with a value from 1 to 7 on which day we are. This could reveal very interesting relationships!')]),e._v(" "),a("p",[e._v("Often the feature engineering phase is vital for traditional models, while we will see that for Deep Learning models it is less important, as they have among their advantages to automatically extract relevant features from the data.")]),e._v(" "),a("p",[e._v('Finally we will see in this section how to automate these "pipelines" of collection, cleaning and preprocessing.')]),e._v(" "),a("h3",{attrs:{id:"select-and-train-an-ml-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-and-train-an-ml-model"}},[e._v("#")]),e._v(" Select and train an ML model")]),e._v(" "),a("p",[e._v('Once the data has been cleaned and prepared, it is time to choose an algorithm that must be "trained" on it, and whose output will be a predictive model.')]),e._v(" "),a("p",[e._v("This model can be a statistical model (even if all the models we will see apply statistical concepts) or a Deep Learning model.")]),e._v(" "),a("p",[e._v("Statistical models have been used for decades to predict the future, such as sales in the next quarter, or the climate in a given region.")]),e._v(" "),a("p",[e._v("In general, these models:")]),e._v(" "),a("ul",[a("li",[e._v("They require statistical knowledge")]),e._v(" "),a("li",[e._v("Require feature engineering")]),e._v(" "),a("li",[e._v('They are "simple" in the sense that they are easy to interpret and debug')])]),e._v(" "),a("p",[e._v("Deep Learning models (software artifacts called neural networks) are techniques that have been exploding in recent years, providing excellent performance on problems previously impossible to solve, in general:")]),e._v(" "),a("ul",[a("li",[e._v("They require empirical and practical knowledge about training neural networks")]),e._v(" "),a("li",[e._v("Do not necessarily require feature engineering (but may benefit from it)")]),e._v(" "),a("li",[e._v('They are "complex" in the sense that they are difficult to interpret and debug.')]),e._v(" "),a("li",[e._v('They are the only solutions in case of equally "complex" problems, such as the vision or understanding of natural language.')])]),e._v(" "),a("p",[e._v("We will see in detail various types of statistical models and Deep Learning, with a particular focus on the latter, which over the years are proving a revolution and promise to overturn entire industries, as well as drastically improve the processes that characterize them.")]),e._v(" "),a("p",[e._v("Once the model that best solves our problem has been selected, the training phase takes place, where the model is shown many examples (our data) and its parameters are adjusted in order to obtain satisfactory performance.")]),e._v(" "),a("h3",{attrs:{id:"evaluate-and-fine-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evaluate-and-fine-tuning"}},[e._v("#")]),e._v(" Evaluate and fine-tuning")]),e._v(" "),a("p",[e._v("Once we set up the training process and trained the model, we are ready to evaluate it and understand what actual performance it would have in the face of data that it has never seen.")]),e._v(" "),a("p",[e._v("Therefore, before training, the data is divided between training data (those that the model will see) and test data that it has never seen (those on which it will be tested).")]),e._v(" "),a("p",[e._v("This phase is of vital importance to understand how the model will perform in the real world, and to understand if it will actually be useful.")]),e._v(" "),a("p",[e._v("In this section we will also understand how to choose the best parameters to train the models, so as to maximize their performance in the test phase.")]),e._v(" "),a("p",[e._v("Moreover, we will see how to compose together several predictive models to form a more effective one, and you will learn to use one of the most useful techniques in the real application of Deep Learning: "),a("em",[e._v("Transfer Learning")]),e._v(".")]),e._v(" "),a("p",[e._v("This concept consists in applying the knowledge already learned from a problem to a new problem, reducing the amount of data needed and the computational costs for training.")]),e._v(" "),a("p",[e._v("We'll see how in practice you almost never train a model from scratch, but you take advantage of pre-trained models made available by large companies and researchers.")]),e._v(" "),a("h3",{attrs:{id:"launch-and-mantain-the-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-and-mantain-the-system"}},[e._v("#")]),e._v(" Launch and mantain the system")]),e._v(" "),a("p",[e._v("Once the model is sufficiently tested and its performing well it can be used to make predictions.")]),e._v(" "),a("p",[e._v("In this section you will learn how to build models that can scale to hundreds or thousands of users, leveraging the power of the Cloud and the flexibility of the API Rest concept.")]),e._v(" "),a("p",[e._v("You will learn how to distribute your models across multiple machines, and monitor them carefully through metrics and alarms.")]),e._v(" "),a("p",[e._v("In fact, one of the biggest costs of Data Science projects (but we could say software in general) is maintenance.\nHere are some questions you need to ask yourself when you put a model into production in the real world:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Do users use it")]),e._v("?")]),e._v(" "),a("li",[e._v("Is the number of users using it controllable, or is there a slowdown?")]),e._v(" "),a("li",[e._v("How certain is the model of predictions it makes?")]),e._v(" "),a("li",[e._v("How do I make sure the new input data is appropriate?")]),e._v(" "),a("li",[e._v("How do I ensure that they are properly preprocessed (yes, automatic pipelines, I'm looking at you)?")]),e._v(" "),a("li",[e._v("Do the real world data reflect the training data?")]),e._v(" "),a("li",[e._v("How do real world data change over time?")]),e._v(" "),a("li",[e._v("How do I integrate the new knowledge I collect over time (i.e., the new data from the real world)?")]),e._v(" "),a("li",[e._v("How do I ensure that the performance of the model does not degrade over time?")])]),e._v(" "),a("p",[e._v("These and other questions will be covered in this section.")]),e._v(" "),a("h3",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("You've just had a taste of everything we'll see in the next sections of Purgatorio, but remember there will be much more to learn! Alongside these guides you'll be given some to learn how to use libraries and frameworks used by organizations and governments, how to take advantage of the power and flexibility of Cloud vendors, how to read research papers, and much more!")]),e._v(" "),a("p",[e._v("Warm up your fingers and brain and prepare a coffee, the journey is about to begin!")])])}),[],!1,null,null,null);t.default=n.exports}}]);